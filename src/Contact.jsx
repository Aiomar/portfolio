function Contact() {
  return(
    <div id="contact-card">
      <div class="md:max-w-3xl mb-2 flex flex-col items-center bg-gray-900 border border-gray-600  rounded-3xl shadow md:flex-row  dark:border-gray-700  hover:bg-slate-900 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Contact Info</h5>

          <div className="flex flex-wrap justify-center space-x-4">
            <a href="https://mailto:aidi360omar@gmail.com/" className="text-white flex hover:scale-110" target="_blank">
              <img src="/assets/gmail-svgrepo-com.svg" className="w-5 hover" alt="" /> 
              <p className="pl-2">aidi360omar@gmail.com</p>
            </a>  
          </div>

          <div className="flex flex-wrap space-x-4">
            <a href="https://www.facebook.com/omar.aidi.12139/" className="text-white flex hover:scale-110" target="_blank">
              <img src="/assets/facebook-1-svgrepo-com.svg" className="w-5" alt="" /> 
              <p className="pl-2">Omar Aidi</p>
            </a>  
          </div>

          <div className="flex flex-wrap space-x-4">
            <a href="https://www.instagram.com/omar.ai.di/" className="text-white flex hover:scale-110" target="_blank">
              <img src="/assets/instagram-social-media-network-communication-interaction-connection-svgrepo-com.svg" className="w-5" alt="" /> 
              <p className="pl-2">omar.ai.di</p>
            </a>  
          </div>

          <div className="flex flex-wrap space-x-4">
            <a href="https://discord.gg/dzWm6DCztZ" className="text-white flex hover:scale-110" target="_blank">
              <img src="/assets/discord-icon-svgrepo-com.svg" className="w-5" alt="" /> 
             <p className="pl-2"> Omar Aidi</p>
            </a>  
          </div>

          <p class="mb-3 font-normal text-white dark:text-gray-400">
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;