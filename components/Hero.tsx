import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="">
        <div className="flex items-center">
          <Image
            src="/pic.png"
            height={120}
            width={120}
            className="rounded-full"
            alt=""
          />
          <div className="text-xl font-semibold">Name</div>
          <div className="text-sm text-gray-400">Location</div>
          <div className="flex gap-4 text-sm text-blue-500">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>

        </div>

        <div className="space-y-1">
        </div>
      </div>

      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam eum
        ratione accusamus quam blanditiis magni, odit perspiciatis placeat
        labore?
      </div>
    </main>
  );
};
export default Hero;
