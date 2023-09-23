import data from "../lib/data";

const Contact = () => {
  return (
    <div className="bg-black md:flex ">
      <div className="contact mt-8 md:mt-0 flex flex-col gap-4">
        <div className="title">
          <h1 className="font-body font-semibold text-common">Contact Us</h1>
        </div>
        {footer.contact.map((item, index) => (
          <ul key={index}>
            <li className="flex gap-4 items-baseline">
              <span>
                {" "}
                <img src={item.icon} alt="icon" />{" "}
              </span>
              <span className={index === 1 && "basis-2/5 md:basis-1/3"}>
                {item.body}
              </span>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="title font-title text-common font-bold">
          <p>Questions or need assistance?</p>
          <p className="subtitle">Let us know about it!</p>
        </div>
        <form className="flex flex-col   p-10 gap-4" action="">
          <input
            className="hidden md:block"
            type="text"
            placeholder="First Name"
          />
          <input className="md:hidden" type="text" placeholder="Team's Name" />
          <input
            className="md:hidden"
            type="text"
            name="topic"
            id="topic"
            placeholder="Topic"
          />
          <input
            className="hidden md:block"
            type="email"
            name="email"
            placeholder="Mail"
            id="email"
          />
          <input
            className="md:hidden"
            type="email"
            name="email"
            placeholder="Email"
            id="email"
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>

          <button
            type="submit"
            className=" m-auto font-body w-[152px] h-[53px] rounded bg-gradient-to-r from-purple-600 to-pink-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
