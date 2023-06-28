import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-6/12 xl:w-8/12">
            <NewsLatterBox />
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-4/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-[green]/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-[24px] font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-[24px]">
                Cần giúp đỡ? Mở một vé
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nhóm hỗ trợ của chúng tôi sẽ liên hệ lại với bạn càng sớm càng tốt qua email.
              </p>
              <form>
                <div className="-mx-4 ">
                  <div className="w-full px-4 md:w-full">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-full">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Địa chỉ email
                      </label>
                      <input
                        type="email"
                        placeholder="Địa chỉ email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vấn đề của bạn
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Vấn đề của bạn"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-[green] py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Gửi yêu cầu
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
