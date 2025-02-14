"use client"; 

import React, { useState } from "react";
import Image from "next/image";


const projects = [
  {
    title: "Project 01",
    description: "株式会社ゲッタウェイ　プロジェクトコーポレートページ",
    image: "/g-lung.png",
    details: {
      Production: "コーポレートページ制作の他、「コワーキングスペース」「民宿」の予約サイトの設定や決済システム（Paidy）の導入等を行いました。",
      Job: "\nディレクター（webデザイン,フロントエンド開発）",
      Productionperiod:"\n2023年7月~2024年4月",
    },
  },
{
  title: "Project 02",
  description:"株式会社ゲッタウェイ",
  image: "/goldengate.png",
  details: {
    Production: "Golden Gate（コワーキングスペース）JI PANG（民宿）の専用サイトを企画から携わり制作を行いました。",
    Job: "\nディレクター（webデザイン,フロントエンド開発）",
    Productionperiod:"\n2023年7月~2024年3月",
  },
},
{
  title: "Project 03",
  description: "株式会社プロウィング様　リクルートサイト",
  image: "/prowing.png",
  details: {
    Production:"採用サイトのデザイン作成を行い、コーディングではパートナー会社様と連携のもと制作いたしました。",
    Job: "\nWebディレクター（webデザイン）",
    Productionperiod:"\n2023年11月~2024年2月",
  },
},
{
  title: "Project 04",
  description: "WAZAMONO　商品紹介サイト",
  image: "/wazamono.png",
  details: {
    Production: "クラウドファンディングに伴う商品サイトのご依頼。企画からデザイン、開発を行いました。",
    Job: "\nWebディレクター（webデザイン,フロントエンド開発）",
    Productionperiod:"\n2023年10月~2023年11月",
  },
  },
  {
    title: "Project 05",
    description: "株式会社ZIPLUS様",
    image: "/ziplus.png",
    details: {
      Production: "中国向けアプリWeChatミニプログラムの作成。3事業を踏襲したページ作成を企画からデザインまで一貫して行いました。",
      Job: "\nWebディレクター（webデザイン）",
      Productionperiod:"\n2024年10月~2024年11月",
    },
  },
  {
    title: "Project 06",
    description: "大阪市立美術館様",
    image: "/osaka.png",
    details: {
      Production: "中国向けアプリWeChatミニプログラムの作成。大阪市立様4月のリニューアルオープンに向けたページ作成を企画からデザインまで一貫して行いました。",
      Job: "\nWebディレクター（webデザイン）",
      Productionperiod:"\n2024年10月~2024年11月",
    },
  },
  {
    title: "Project 07",
    description: "日本電子学校様",
    image: "/nihon.png",
    details: {
      Production:"中国向けアプリWeChatミニプログラムの改修。入学手順や入学資格ページを企画から追加制作いたしました。",
      Job:"\nWebディレクター（webデザイン）",
      Productionperiod:"\n2024年6月~2024年8月",
    },
},
];


export default function Works() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="works">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Works</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative border-b pb-4">
              {/* 画像表示 */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* タイトル・会社名と矢印 */}
              <div
                className="mt-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDetails(index)}  // クリックで詳細を表示/非表示
              >
                <h3 className="text-xl font-light">{project.title}</h3>
                <span
                  className={`arrow ${activeIndex === index ? "rotate-180" : ""}`}
                ></span>
              </div>
              <p className="text-gray-600">{project.description}</p>

              {/* 詳細情報（クリックで表示） */}
              {activeIndex === index && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md text-sm">
                  <p>
                    <strong>Production</strong><br />
                    {project.details.Production.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <p><strong>Job</strong>
                   {project.details.Job.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}</p>
                  <p><strong>Production period</strong> 
                  {project.details.Productionperiod.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
