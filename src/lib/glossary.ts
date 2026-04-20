export interface GlossaryTerm {
  id: string;
  term: string;
  reading?: string;
  description: string;
  related?: string[];
}

export const glossary: GlossaryTerm[] = [
  {
    id: "sprite",
    term: "スプライト (Sprite)",
    reading: "すぷらいと",
    description:
      "ゲームで使われるキャラクターやオブジェクトの画像のこと。Asepriteで作成する画像ファイル1つが1スプライトに対応する。",
    related: ["spritesheet", "frame"],
  },
  {
    id: "spritesheet",
    term: "スプライトシート (Sprite Sheet)",
    reading: "すぷらいとしーと",
    description:
      "複数のフレームやスプライトを1枚の画像にまとめたもの。ゲームエンジンへの取り込みに使われる。",
    related: ["sprite", "frame", "export"],
  },
  {
    id: "pixel-art",
    term: "ピクセルアート / ドット絵",
    reading: "ぴくせるあーと",
    description:
      "1ピクセル単位で描かれるデジタルアートの手法。低解像度で表現力を追求するのが特徴。",
    related: ["sprite", "palette"],
  },
  {
    id: "palette",
    term: "パレット (Palette)",
    reading: "ぱれっと",
    description:
      "作品で使用する色の一覧。Asepriteでは画面右側にカラーグリッドとして表示される。色数を管理し統一感を保つために重要。",
    related: ["index-color", "color-picker", "ramp"],
  },
  {
    id: "index-color",
    term: "インデックスカラー (Indexed Color)",
    reading: "いんでっくすからー",
    description:
      "パレットに登録された色だけを使用するカラーモード。色を変更するとキャンバス上の該当色も一括で変わる。",
    related: ["palette", "rgba"],
  },
  {
    id: "rgba",
    term: "RGBA",
    reading: "あーるじーびーえー",
    description:
      "赤(R)・緑(G)・青(B)・透明度(A)の4チャンネルで色を表現するカラーモード。フルカラーで自由に色を使える。",
    related: ["index-color", "hsv"],
  },
  {
    id: "hsv",
    term: "HSV",
    reading: "えいちえすぶい",
    description:
      "色相(Hue)・彩度(Saturation)・明度(Value)で色を指定するカラーモデル。ドット絵では影色やハイライトを作る際に便利。",
    related: ["color-picker", "palette"],
  },
  {
    id: "color-picker",
    term: "カラーピッカー (Color Picker)",
    reading: "からーぴっかー",
    description:
      "色を選択するためのツール。Asepriteでは画面下部のカラーバーをクリックすると開く。RGB、HSV、Hexなどのモードで色を指定できる。",
    related: ["hsv", "rgba", "eyedropper"],
  },
  {
    id: "eyedropper",
    term: "スポイト (Eyedropper)",
    reading: "すぽいと",
    description:
      "キャンバス上の色を拾って前景色や背景色にセットするツール。Alt+クリックまたはIキーで使用。",
    related: ["color-picker"],
  },
  {
    id: "ramp",
    term: "ランプ / グラデーション (Ramp)",
    reading: "らんぷ",
    description:
      "パレット上で2色間を補完する色のグラデーション。影色やハイライトの中間色を自動生成するのに使う。",
    related: ["palette"],
  },
  {
    id: "frame",
    term: "フレーム (Frame)",
    reading: "ふれーむ",
    description:
      "アニメーションの1コマ。タイムライン上で横方向に並ぶ。フレーム数とフレーム間の時間でアニメーション速度が決まる。",
    related: ["timeline", "onion-skin", "fps"],
  },
  {
    id: "timeline",
    term: "タイムライン (Timeline)",
    reading: "たいむらいん",
    description:
      "フレームとレイヤーを管理するパネル。横軸がフレーム（時間）、縦軸がレイヤー（重なり順）。",
    related: ["frame", "layer", "cel"],
  },
  {
    id: "layer",
    term: "レイヤー (Layer)",
    reading: "れいやー",
    description:
      "画像を重ね合わせる透明なシートのようなもの。パーツごとにレイヤーを分けると編集が楽になる。",
    related: ["timeline", "blend-mode", "cel"],
  },
  {
    id: "cel",
    term: "セル (Cel)",
    reading: "せる",
    description:
      "タイムライン上のレイヤーとフレームが交差する1マスに入る画像データ。アニメーションの最小単位。",
    related: ["frame", "layer", "timeline"],
  },
  {
    id: "onion-skin",
    term: "オニオンスキン (Onion Skinning)",
    reading: "おにおんすきん",
    description:
      "前後のフレームを半透明で重ねて表示する機能。アニメーションの動きの流れを確認しながら作業できる。",
    related: ["frame", "timeline"],
  },
  {
    id: "fps",
    term: "FPS (フレームレート)",
    reading: "えふぴーえす",
    description:
      "1秒あたりのフレーム数。ドット絵アニメーションでは8〜15FPS程度が一般的。",
    related: ["frame"],
  },
  {
    id: "blend-mode",
    term: "ブレンドモード (Blend Mode)",
    reading: "ぶれんどもーど",
    description:
      "レイヤー同士の合成方法。Normal（通常）、Multiply（乗算）、Screen（スクリーン）などがあり、色の重なり方を制御する。",
    related: ["layer"],
  },
  {
    id: "tilemap",
    term: "タイルマップ (Tilemap)",
    reading: "たいるまっぷ",
    description:
      "小さなタイル画像を並べてマップを構成する手法。RPGのフィールドやプラットフォーマーのステージ作成に使われる。",
    related: ["tile", "tileset"],
  },
  {
    id: "tile",
    term: "タイル (Tile)",
    reading: "たいる",
    description:
      "タイルマップの最小構成単位。通常8×8、16×16、32×32ピクセルの正方形。",
    related: ["tilemap", "tileset"],
  },
  {
    id: "tileset",
    term: "タイルセット (Tileset)",
    reading: "たいるせっと",
    description:
      "タイルマップで使用するタイル画像の一覧。地面・壁・水など異なるパーツのタイルがまとめられている。",
    related: ["tilemap", "tile"],
  },
  {
    id: "export",
    term: "エクスポート (Export)",
    reading: "えくすぽーと",
    description:
      "Asepriteで作成した作品をPNG、GIF、スプライトシートなどの形式で書き出すこと。",
    related: ["spritesheet"],
  },
  {
    id: "canvas",
    term: "キャンバス (Canvas)",
    reading: "きゃんばす",
    description:
      "ドット絵を描く作業領域。Asepriteのメイン画面中央に表示される。",
    related: ["sprite"],
  },
  {
    id: "brush",
    term: "ブラシ (Brush)",
    reading: "ぶらし",
    description:
      "描画ツールの筆先の形状とサイズ。1pxの四角が基本だが、丸形やカスタムブラシも作成できる。",
    related: ["pixel-art"],
  },
  {
    id: "selection",
    term: "選択範囲 (Selection)",
    reading: "せんたくはんい",
    description:
      "キャンバス上の特定の領域を指定すること。移動、コピー、変形などの操作対象を限定するために使う。",
    related: ["canvas", "transform"],
  },
  {
    id: "transform",
    term: "変形 (Transform)",
    reading: "へんけい",
    description:
      "選択範囲やセルの拡大・縮小・回転・反転などの操作。Ctrl+Tで変形モードに入る。",
    related: ["selection"],
  },
  {
    id: "alpha",
    term: "アルファ / 透明度 (Alpha)",
    reading: "あるふぁ",
    description:
      "ピクセルの透明度を表す値。0が完全に透明、255が完全に不透明。透過PNGの書き出しに関わる。",
    related: ["rgba", "export"],
  },
  {
    id: "anti-alias",
    term: "アンチエイリアス (Anti-aliasing)",
    reading: "あんちえいりあす",
    description:
      "ギザギザの境界を中間色でぼかして滑らかに見せる技法。ドット絵では意図的にオフにすることが多いが、大きいサイズでは有効な場合もある。",
    related: ["pixel-art"],
  },
  {
    id: "dithering",
    term: "ディザリング (Dithering)",
    reading: "でぃざりんぐ",
    description:
      "限られた色数でグラデーションを表現するため、異なる色のピクセルを規則的または不規則的に配置するテクニック。",
    related: ["palette", "pixel-art"],
  },
  {
    id: "outline",
    term: "アウトライン (Outline)",
    reading: "あうとらいん",
    description:
      "スプライトの外周を囲む輪郭線。黒一色が定番だが、パーツごとに色を変える「カラーアウトライン」も人気。",
    related: ["pixel-art", "sprite"],
  },
  {
    id: "subpixel",
    term: "サブピクセル (Sub-pixel)",
    reading: "さぶぴくせる",
    description:
      "1ピクセル未満の動きを中間色の配置で表現するテクニック。小さなスプライトのアニメーションで滑らかさを出すのに使われる。",
    related: ["pixel-art", "anti-alias"],
  },
];

export function getTermById(id: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.id === id);
}
