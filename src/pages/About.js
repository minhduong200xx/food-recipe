import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section class="dark:bg-gray-800 dark:text-gray-100">
        <div class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              Giới thiệu <b className="text-orange-500">Food Recipe</b> - Công
              Thức Nấu Ăn
            </h2>
            <p class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              Trước hết, Food Recipe xin gửi lời cảm ơn đến những độc giả đã ghé
              thăm và ở lại với
              <b className="text-orange-500"> Food Recipe.</b>
            </p>
          </div>
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center bg-orange-100 p-6 rounded-xl shadow-lg">
            <div>
              <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Mục đích xây dựng
                <b className="text-orange-500"> Food Recipe</b>
              </h3>
              <p class="mt-3 text-lg dark:text-gray-400">
                Trong kỷ nguyên của 4.0 với sự bùng nổ của internet chúng ta có
                thể dễ dàng tiếp cận và đọc được những thông tin trên mạng một
                cách dễ dàng.
              </p>
              <p class="mt-3 text-lg dark:text-gray-400">
                Tuy nhiên, việc có quá nhiều luồng thông tin cũng khiến cho
                nhiều độc giả cảm thấy bị phân tâm, và loãng. Thấu hiểu được
                điều đó nên <i className="text-orange-600">Food Recipe</i> được
                ra đời nhằm:
              </p>
              <div class="mt-12 space-y-12">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                      Cung cấp và liên tục cập nhật những cách làm món ăn, hay
                      những món ăn ngon, hợp xu hướng, văn hóa Việt.
                    </h4>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-7 h-7"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leading-6 dark:text-gray-50">
                      Chúng tôi cũng tìm hiểu, trải nghiệm và review một số sản
                      phẩm đồ gia dụng như bếp nướng, nồi chiên không dầu, tivi,
                      tủ lạnh,… nhằm giúp người đọc có hướng nhìn đa chiều,
                      khách quan hơn.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" class="mt-10 lg:mt-0">
              <img
                className="w-2/3 ml-24 rounded-2xl"
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <div>
            <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div class="lg:col-start-2 bg-slate-300 rounded-xl p-4 shadow-lg">
                <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  Thành viên nhóm
                </h3>
                <ul className="list-decimal mt-4 ml-12">
                  <li className="text-xl px-4 py-2 hover:text-orange-500">
                    <a
                      className="hover:text-orange-600"
                      href="https://www.facebook.com/min.d2101"
                    >
                      Nguyễn Minh Dương
                    </a>
                  </li>
                  <li className="text-xl px-4 py-2 hover:text-orange-500">
                    <a
                      className="hover:text-orange-600"
                      href="https://www.facebook.com/thang.tranminh.9803"
                    >
                      Trần Minh Thắng
                    </a>
                  </li>
                  <li className="text-xl px-4 py-2 hover:text-orange-500">
                    <a
                      className="hover:text-orange-600"
                      href="https://www.facebook.com/xu.xi.1614460"
                    >
                      Hoàng Quý Hào
                    </a>
                  </li>
                  <li className="text-xl px-4 py-2 hover:text-orange-500">
                    <a
                      className="hover:text-orange-600"
                      href="https://www.facebook.com/profile.php?id=100007899344906"
                    >
                      Đỗ Văn Hảo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
