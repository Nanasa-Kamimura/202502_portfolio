import Image from "next/image"; // 画像用のコンポーネントをインポート

export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              東京コミュニケーション専門学校にて、Webデザインを多角的に学び卒業後、フロントエンド開発を経験。
              その後、2社でWebディレクターとして開発やデザイン知識を活かし、新規Web事業に携わりました。
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              移り変わりの早いWeb業界の中で、「貪欲に成長続ける」を胸に個人でもWeb制作を行なっています。
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder-about.png" // 画像のパス
              alt="About Image" // 画像の代替テキスト
              layout="fill" // 親要素に合わせて画像のサイズを変更
              objectFit="cover" // 画像の表示方法（切り抜きや引き伸ばし）
              className="rounded-lg" // 画像の角を丸くする（任意）
            />
          </div>
        </div>
      </div>
    </section>
  );
}
