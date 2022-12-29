import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  orderBy,
  where,
  startAfter,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Tags from "../components/Tags";
import FeatureBlogs from "../components/FeatureBlogs";
import Trending from "../components/Trending";
import Search from "../components/Search";
import { isEmpty, isNull } from "lodash";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import { Link } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setActive, user, active }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [lastVisible, setLastVisible] = useState(null);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(null);
  const [hide, setHide] = useState(false);
  const queryString = useQuery();
  const searchQuery = queryString.get("searchQuery");
  const location = useLocation();

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery = query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(() => {
    getTrendingBlogs();
    setSearch("");
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setTotalBlogs(list);
        // setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, [setActive, active]);

  useEffect(() => {
    getBlogs();
    setHide(false);
  }, [active]);

  const getBlogs = async () => {
    const blogRef = collection(db, "blogs");
    console.log(blogRef);
    const firstFour = query(blogRef, orderBy("title"), limit(4));
    const docSnapshot = await getDocs(firstFour);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
  };

  console.log("blogs", blogs);

  const updateState = (docSnapshot) => {
    const isCollectionEmpty = docSnapshot.size === 0;
    if (!isCollectionEmpty) {
      const blogsData = docSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs((blogs) => [...blogs, ...blogsData]);
      setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    } else {
      toast.info("Không còn bài viết để hiển thị");
      setHide(true);
    }
  };

  const fetchMore = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const nextFour = query(
      blogRef,
      orderBy("title"),
      limit(4),
      startAfter(lastVisible)
    );
    const docSnapshot = await getDocs(nextFour);
    updateState(docSnapshot);
    setLoading(false);
  };

  const searchBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const searchTitleQuery = query(blogRef, where("title", "==", searchQuery));
    const searchdescQuery = query(
      blogRef,
      where("description", "array-contains", searchQuery)
    );
    const titleSnapshot = await getDocs(searchTitleQuery);
    const descSnapshot = await getDocs(searchdescQuery);

    let searchTitleBlogs = [];
    let searchdescBlogs = [];
    titleSnapshot.forEach((doc) => {
      searchTitleBlogs.push({ id: doc.id, ...doc.data() });
    });
    descSnapshot.forEach((doc) => {
      searchdescBlogs.push({ id: doc.id, ...doc.data() });
    });
    const combinedSearchBlogs = searchTitleBlogs.concat(searchdescBlogs);
    setBlogs(combinedSearchBlogs);
    setHide(true);
    setActive("");
  };

  useEffect(() => {
    if (!isNull(searchQuery)) {
      searchBlogs();
    }
  }, [searchQuery]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Bạn muốn xoá công thức này ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Xoá công thức thành công");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (isEmpty(value)) {
      console.log("test");
      getBlogs();
      setHide(false);
    }
    setSearch(value);
  };

  const counts = totalBlogs.reduce((prevValue, currentValue) => {
    let name = currentValue.category;
    if (!prevValue.hasOwnProperty(name)) {
      prevValue[name] = 0;
    }
    prevValue[name]++;
    return prevValue;
  }, {});

  const categoryCount = Object.keys(counts).map((k) => {
    return {
      category: k,
      count: counts[k],
    };
  });

  console.log("categoryCount", categoryCount);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <Trending blogs={trendBlogs} />
          <div className="col-md-8">
            <div className="border-b-2 border-b-gray-200 mb-2">
              <Link to={"/blogs"}>
                <div className="bg-orange-400 text-gray-100 w-fit px-2 py-1 rounded-xl my-2 ">
                  Công Thức
                </div>
              </Link>
            </div>
            {blogs.length === 0 && location.pathname !== "/" && (
              <>
                <h4>
                  Không tìm thấy bài viết với từ khoá :{" "}
                  <strong>{searchQuery}</strong>
                </h4>
              </>
            )}
            {blogs?.map((blog) => (
              <BlogSection
                key={blog.id}
                user={user}
                handleDelete={handleDelete}
                {...blog}
              />
            ))}

            {!hide && (
              <button
                className="cursor-pointer text-white px-3 py-2 rounded-xl bg-orange-500 border-none hover:text-white hover:bg-green-600"
                onClick={fetchMore}
              >
                Xem thêm
              </button>
            )}
          </div>
          <div className="col-md-3">
            <Search search={search} handleChange={handleChange} />
            <div className="bg-gray-300 text-xl w-full w-full rounded-xl my-2 ">
              <div className="text-start ml-4 py-2 mb-4 text-black w-fit">
                Tags
              </div>
              <Tags className="mt-2" title="Tags" tags={tags} />
            </div>
            <div className="bg-orange-300 w-full text-gray-100 px-2 py-1 rounded-xl my-2">
              <FeatureBlogs title={"Phổ Biến"} blogs={blogs} />
            </div>
            <Category catgBlogsCount={categoryCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
