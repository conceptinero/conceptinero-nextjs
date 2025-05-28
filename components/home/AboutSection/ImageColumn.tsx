import Image from "next/image";

function ImageColumn() {
  return (
    <div
    //   className="lg:w-1/2 mb-10 lg:mb-0"
    //   initial={{ opacity: 0, x: -30 }}
    //   whileInView={{ opacity: 1, x: 0 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-tl-2xl z-0"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-br-2xl z-0"></div>
        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Conceptinero team meeting"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageColumn;
