const Caption =()=>{
  return(
    <div className="mx-16 grid grid-cols-5 gap-2 h-32 cursor-pointer">
    <div className="relative flex items-center justify-center text-white rounded-lg group bg-cover"
     style={{ backgroundImage: 'url(https://i.pinimg.com/564x/a3/6e/f3/a36ef3f410195df3696ba2f60b3bb795.jpg)',
     boxShadow:' 5px 5px 0px 0px rgba(0, 0, 0, 0.55), 10px 10px 0px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px 0px rgba(0, 0, 0, 0.2), 20px 20px 0px 0px rgba(0, 0, 0, 0.1)'}}>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img src="https://i.pinimg.com/originals/4c/c2/3a/4cc23ab9f1fcc0efd86ed0c8c5f84b4c.gif" alt="spider man" className="w-[100%] h-[100%] rounded-lg" />
        </div>
        <div className="relative z-10 font-bold text-2xl">Spider Man</div>
    </div>

    <div className="relative flex items-center justify-center text-white rounded-lg group bg-cover" 
    style={{backgroundImage: 'url(https://i.pinimg.com/564x/45/b4/fc/45b4fc80de00ed1b14d03ac1be4e664d.jpg)',
    boxShadow:' 5px 5px 0px 0px rgba(0, 0, 0, 0.55), 10px 10px 0px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px 0px rgba(0, 0, 0, 0.2), 20px 20px 0px 0px rgba(0, 0, 0, 0.1)'}}>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <img src="https://i.pinimg.com/originals/a1/77/ab/a177ab0668672a162e53d00ee830cc21.gif" alt="iron man" className="w-[100%] h-[100%] rounded-lg" />
      </div>
      <div className="relative z-10 font-bold text-2xl">Iron Man</div>
    </div>

    <div className="relative flex items-center justify-center text-white rounded-lg group bg-cover"
     style={{backgroundImage: 'url(https://i.pinimg.com/564x/da/b7/bc/dab7bcb22689e390da2be31941182935.jpg)',
     boxShadow:' 5px 5px 0px 0px rgba(0, 0, 0, 0.55), 10px 10px 0px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px 0px rgba(0, 0, 0, 0.2), 20px 20px 0px 0px rgba(0, 0, 0, 0.1)' }}>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <img src="https://i.pinimg.com/originals/de/0b/6e/de0b6e9674010530b9ccfa8976f778fe.gif" alt="iron man" className="w-[100%] h-[100%] rounded-lg" />
      </div>
      <div className="relative z-10 font-bold text-2xl">Thor</div>
    </div>

    <div className="relative flex items-center justify-center text-white rounded-lg group bg-cover" 
    style={{backgroundImage: 'url(https://i.pinimg.com/564x/61/b9/7b/61b97b260b185b2f08d68ab97000e080.jpg)',
    boxShadow:' 5px 5px 0px 0px rgba(0, 0, 0, 0.55), 10px 10px 0px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px 0px rgba(0, 0, 0, 0.2), 20px 20px 0px 0px rgba(0, 0, 0, 0.1)'}}>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <img src="https://i.pinimg.com/originals/3d/ab/2a/3dab2a3d46911fc5028d81f44f02049e.gif" alt="iron man" className="w-[100%] h-[100%] rounded-lg" />
      </div>
      <div className="relative z-10 font-bold text-2xl">Captain</div>
    </div>

    <div className="relative flex items-center justify-center text-white rounded-lg group bg-cover"
     style={{backgroundImage: 'url(https://i.pinimg.com/564x/ee/25/88/ee2588e788e27699bd5bb0e2f1024c72.jpg)',
     boxShadow:' 5px 5px 0px 0px rgba(0, 0, 0, 0.55), 10px 10px 0px 0px rgba(0, 0, 0, 0.3), 15px 15px 0px 0px rgba(0, 0, 0, 0.2), 20px 20px 0px 0px rgba(0, 0, 0, 0.1)'}}>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <img src="https://i.pinimg.com/originals/f1/93/12/f19312041f3af064316486685e957ba5.gif" alt="iron man" className="w-[100%] h-[100%] rounded-lg" />
      </div>
      <div className="relative z-10 font-bold text-2xl">Frozen</div>
    </div>
</div>
  )
}
export default Caption;