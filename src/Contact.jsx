import Social from "./Social";

function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center  bg-slate-900 w-full h-screen "
    >
      {/*Title : Contact Info */}
      <div className="mb-20">
        <h5 className="font-mono text-center md:text-5xl text-2xl font-bold tracking-tight text-sky-500">
          📲Contact & Social Accounts
        </h5>
      </div>

      <div
        className="w-full mb-2 flex flex-col justify-center
        rounded-3xl  md:flex-row  "
      >
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="mb-10">
            {/*Gmail Card */}
            <Social
              name="aidi360omar@gmail.com"
              details="send me an email"
              img="assets/gmail.svg"
              link="mailto:aidi360omar@gmail.com"
            />
          </div>

          <div className="mb-10">
            {/*Facebook Card */}
            <Social
              name="Omar Aidi"
              details="Contact me on Facebook"
              img="assets/facebook.svg"
              link="mailto:aidi360omar@gmail.com"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="mb-10">
          {/*Insatgram Card */}
          <Social
            name="omar.ai.di"
            details="Contact me on Instagram"
            img="assets/instagram.svg"
            link="https://www.instagram.com/omar.ai.di/"
          />
        </div>
        <div className="mb-10">
          {/*Discord Card */}
          <Social
            name="Dev & Coding"
            details="Visit My Discord Server"
            img="assets/discord.svg"
            link="https://discord.gg/dzWm6DCztZ"
          />
        </div>
      </div>

      <div className="flex justify-center">
        {/*Github Card */}
        <Social
          name="omar aidi"
          details="Visit My Github profile "
          img="assets/github.svg"
          link="https://github.com/Aiomar"
        />
      </div>
    </section>
  );
}

export default Contact;
