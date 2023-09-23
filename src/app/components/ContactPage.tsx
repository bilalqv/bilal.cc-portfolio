import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../constants";

export default function ContactPage() {
  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center " >
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-3xl max-[500px]:text-2xl font-bold text-center mb-8">Get in touch</h2>
        <div className="my-2 flex  justify-center space-x-4 mb-6 rounded-md w-min mx-auto border border-[#b4b4b4] dark:border-[#1e1e1e] outline-1 p-2">
          <a href={EMAIL} className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiGmail className='text-3xl max-[500px]:text-xl' /> </a>
          <a href={LINKEDIN_URL} target='_blank' className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiLinkedin className='text-3xl max-[500px]:text-xl' /> </a>
          <a href={GITHUB_URL} target='_blank' className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiGithub className='text-3xl max-[500px]:text-xl' /> </a>
        </div>
        {/* <div className="bg-[#090909] rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-3xl max-[500px]:text-2xl font-bold text-center mb-8">Send Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border rounded-md bg-[#252525] focus:outline-none ${formErrors.name ? 'border-red-500' : 'border-none'
                  }`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-md bg-[#252525] focus:outline-none ${formErrors.email ? 'border-red-500' : 'border-none'
                  }`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`w-full px-3 py-2 border rounded-md resize-none bg-[#252525] focus:outline-none ${formErrors.message ? 'border-red-500' : 'border-none'
                  }`}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  )
}