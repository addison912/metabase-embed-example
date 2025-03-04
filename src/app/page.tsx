import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex h-screen w-[100%] flex-col items-center justify-center bg-linear-307 from-slate-950 to-cyan-950 px-16">
      <div
        className="absolute top-[var(--header-height)] flex h-[calc(var(--main-height)-var(--header-height))] w-[100%] flex-col items-center justify-center"
        style={{
          background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQYV2NkQAOMUH4DAwMDCDPABODqMAQAKe4BBZTlhh0AAAAASUVORK5CYII=)",
          backgroundSize: "6px 6px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        <div className="absolute z-12 h-[calc(var(--main-height)-var(--header-height))] w-[100%] bg-black opacity-30"></div>
        <div className="z-20 mx-auto flex h-[100%] w-full max-w-[640px] flex-col justify-center">
          <h1 className="font-brand mb-3 text-center text-orange-500">
            <span className="text-shadow-xl text-7xl">V</span>
            <span className="text-shadow-xl text-6xl">ENDOR </span>
            <span className="text-shadow-xl text-7xl">A</span>
            <span className="text-shadow-xl text-6xl">NALYTICS</span>
          </h1>
          <p className="text-shadow-xl mb-6 text-center text-3xl text-amber-50">
            Helping vendors achieve their highest potential.
          </p>
          <div className="flex justify-center">
            <Link href="/analytics">
              <button className="btn mx-6 cursor-pointer rounded-lg bg-cyan-700 px-4 py-2 text-xl">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/homepage_video.gif"
        alt="Hero Image"
        className="absolute top-0 left-0 z-1 h-[var(--main-height)] w-screen object-cover"
        style={{ objectFit: "cover" }}
        width={1920}
        height={1080}
        unoptimized
      />
      <div className="absolute top-[var(--main-height)] left-0 mt-10 flex w-full items-center justify-center"></div>
    </div>
  );
}
