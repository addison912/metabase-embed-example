import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-linear-307 flex h-screen w-[100%] flex-col items-center justify-center from-slate-950 to-cyan-950 px-16">
      <div
        className="absolute top-[var(--header-height)] flex h-[calc(var(--hero-height)-var(--header-height))] w-[100%] flex-col items-center justify-center"
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
        <div className="z-12 absolute h-[calc(var(--hero-height)-var(--header-height))] w-[100%] bg-black opacity-30"></div>
        <div className="z-20 mx-auto flex h-[100%] w-full max-w-[640px] flex-col justify-center">
          <h1 className="font-brand mb-3 text-center text-orange-300">
            <span className="text-shadow-xl text-7xl">V</span>
            <span className="text-shadow-xl text-6xl">ENDOR </span>
            <span className="text-shadow-xl text-7xl">P</span>
            <span className="text-shadow-xl text-6xl">ORTAL</span>
          </h1>
          <p className="text-shadow-xl mb-6 text-center text-3xl text-amber-50">
            Helping vendors achieve their highest potential.
          </p>
        </div>
      </div>
      <Image
        src="/images/homepage_video.gif"
        alt="Hero Image"
        className="z-1 absolute left-0 top-0 h-[var(--hero-height)] w-screen object-cover"
        layout="fill"
        objectFit="cover"
        unoptimized
      />

      <div className="absolute left-0 top-[var(--hero-height)] mt-10 flex w-full items-center justify-center">
        <Link href="/analytics">
          <button className="mx-6 rounded-lg bg-red-900 px-4 py-2 text-xl">
            Vendor Analytics
          </button>
        </Link>
      </div>
    </div>
  );
}
