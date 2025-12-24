function Card({ userName,button="Name button", bgImage }) {
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


//do this in App.jsx
//   <>
//  <div className="flex flex-row flex-wrap ">
//   <Card userName={"Sameer Ali"} button={"Clicked me"} bgImage="./src/assets/image.jpg" />
//  <Card userName={"Faria Hussain"} button={"Login"} bgImage="./src/assets/image2.jpg" />
//  <Card userName={"Umair Ali"} button={"Double click"} bgImage="./src/assets/image3.jpg" />
//  <Card userName={"Ria"} button={"Sign Up"} bgImage="./src/assets/image4.jpg" />
//  <Card userName={"Faris"} button={"Sign In"} bgImage="./src/assets/image5.jpg" />
 
//  </div>
//  </>
