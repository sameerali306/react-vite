function Card({ userName,button, bgImage }) {
  return (
    <div className="w-48  bg-red-400 flex m-5  bg-cover bg-center rounded-md  shadow-lg "  style={{ backgroundImage: `url(${bgImage})` }}
>
      <div className="flex flex-col mt-40">
        <h1 className="text-white font-bold m-auto text-2xl">{userName}</h1>
      <p className="text-white font-semibold text-center">Lorem ipsum dolor sit amet. ipsum dolor sit amet.</p>
      <button className="text-white bg-gray-400 p-2 flex-row text-center flex justify-center m-5 rounded hover:bg-transparent border-2">{button}</button>
      </div>
      
    </div>
  );
}

export default Card;
