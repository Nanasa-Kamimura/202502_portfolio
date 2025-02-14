"use client"; 

import React, { useState } from "react";
import Image from "next/image";


const projects = [
  {
    title: "Project 01",
    description: "株式会社ゲッタウェイ　プロジェクトコーポレートページ",
    image: "/g-lung.png",
    details: {
      client: "株式会社ゲッタウェイ",
      concept: "ブランドイメージ向上",
      productionDetails: "レスポンシブデザイン、CMS導入",
    },
  },
{
  title: "Project 02",
  description: "株式会社ゲッタウェイ　事業紹介ページ",
  image: "/goldengate.png",
  details: {
    client: "株式会社ゲッタウェイ",
    concept: "サービス認知拡大",
    productionDetails: "シンプルなUIデザイン",
  },
},
{
  title: "Project 03",
  description: "株式会社プロウィング様　リクルートサイト",
  image: "/prowing.png",
  details: {
    client: "株式会社プロウィング",
    concept: "採用強化",
    productionDetails: "動的コンテンツ対応",
  },
},
{
  title: "Project 04",
  description: "WAZAMONO　商品紹介サイト",
  image: "/wazamono.png",
  details: {
    client: "株式会社プロウィング",
    concept: "採用強化",
    productionDetails: "動的コンテンツ対応",
  },
  },
  {
    title: "Project 05",
    description: "株式会社ZIPLUS様",
    image: "/ziplus.png",
    details: {
      client: "株式会社プロウィング",
      concept: "採用強化",
      productionDetails: "動的コンテンツ対応",
    },
  },
  {
    title: "Project 06",
    description: "大阪市立美術館様",
    image: "/osaka.png",
    details: {
      client: "株式会社プロウィング",
      concept: "採用強化",
      productionDetails: "動的コンテンツ対応",
    },
  },
  {
    title: "Project 07",
    description: "日本電子学校様",
    image: "/nihon.png",
    details: {
      client: "株式会社プロウィング",
      concept: "採用強化",
      productionDetails: "動的コンテンツ対応",
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
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <p><strong>Client:</strong> {project.details.client}</p>
                  <p><strong>Concept:</strong> {project.details.concept}</p>
                  <p><strong>Production Details:</strong> {project.details.productionDetails}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
