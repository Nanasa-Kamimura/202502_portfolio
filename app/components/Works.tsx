import Image from "next/image";

const projects = [
  {
    title: "Project 01",
    description: "株式会社ゲッタウェイ　プロジェクトコーポレートページ",
    image: "/g-lung.png",
  },
  {
    title: "Project 02",
    description: "株式会社ゲッタウェイ　事業紹介ページ",
    image: "/goldengate.png",
  },
  {
    title: "Project 03",
    description: "株式会社プロウィング様　リクルートサイト",
    image: "/prowing.png",
  },
  {
    title: "Project 04",
    description: "WAZAMONO　商品紹介サイト",
    image: "/wazamono.png",
  },
  {
    title: "Project 05",
    description: "株式会社ZIPLUS様",
    image: "/ziplus.png",
  },
  {
    title: "Project 06",
    description: "大阪市立美術館様",
    image: "/osaka.png",
  },
  {
    title: "Project 07",
    description: "日本電子学校様",
    image: "/nihon.png",
  },
];

export default function Works() {
  return (
    <section id="works">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Works</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* 画像全体を表示する設定 */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800} // 必要に応じて調整
                  height={450} // 16:9 の比率（適宜変更）
                  className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-light">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
