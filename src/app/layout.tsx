import '@/styles/global.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Motion Analysis System',
    template: '%s | Motion Analysis System',
  },
  description:
    'オープンキャンパス用の動作分析アプリ。バットスイングや立ち幅跳びの速度や角度, スティックピクチャーをグラフで表示させることができる。',
  icons: {
    icon: '/favicon.ico',
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head />
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
