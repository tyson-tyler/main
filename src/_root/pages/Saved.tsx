import { Link } from "react-router-dom";

const Saved = () => {
 

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Join Room</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center cursor-pointer">
            <a href="https://mypagers-community.vercel.app/invite/399b1782-30d3-424c-956c-bdc65c6d1eb0" target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/128/3386/3386878.png" alt="" className="mr-10" />
           <span className="mt-10 text-center">Join Room</span>
           </a>
           <a href="https://mypagers-community.vercel.app/" target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/128/11545/11545160.png" alt="" className="mr-10" />
           <span className="mt-10 text-center">Create Room</span>
           </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Saved;
