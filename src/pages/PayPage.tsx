import { useQuery } from '@apollo/client';
import { Link, useSearchParams } from 'react-router-dom';
import { CornerLogo } from '../components/CornerLogo';
import { QrPayBlock } from '../components/QrPayBlock';
import { WHITELIST_BY_TIANQI } from '../graphql/whitelist';

const STUDENT_ROLE = '学员';

export function PayPage() {
  const [searchParams] = useSearchParams();
  const rawId = searchParams.get('id')?.trim() ?? '';
  const validId = /^\d+$/.test(rawId);

  const { data, loading, error } = useQuery(WHITELIST_BY_TIANQI, {
    skip: !validId,
    variables: {
      where: { ud_tianqi_id_a09b3f: { _eq: rawId } },
    },
  });

  if (!validId) {
    return (
      <div className="page">
        <CornerLogo />
        <main className="main-card">
          <p className="lead">链接无效或缺少天启 ID。</p>
          <Link to="/" className="link-back">
            返回重新输入
          </Link>
        </main>
      </div>
    );
  }

  const rows = data?.ud_baomingbaimingdan_de4adc ?? [];
  const row = rows[0];
  const shenFen = String(row?.ud_shenfen_f01e46 ?? '').trim();
  const isStudentChannel = Boolean(row) && shenFen === STUDENT_ROLE;

  return (
    <div className="page">
      <CornerLogo />
      <main className="main-card main-card-wide">
        <Link to="/" className="link-back link-back-top">
          ← 返回修改天启 ID
        </Link>
        <p className="eyebrow">天启无书 · 共修营</p>
        <h1 className="page-title">付款方式</h1>
        <p className="meta-id">
          天启 ID：<span className="mono">{rawId}</span>
        </p>

        {loading ? (
          <p className="status-text">正在核对名单…</p>
        ) : error ? (
          <div className="alert alert-error" role="alert">
            <p>暂时无法连接服务器，请稍后重试。</p>
            <p className="alert-detail">
              {error.message ? String(error.message) : '未知错误'}
            </p>
          </div>
        ) : isStudentChannel ? (
          <>
            <p className="channel-tag channel-student">学员通道</p>
            <QrPayBlock
              imageSrc="/qr-xueyuan.jpg"
              title="学员报名 · 扫码付款（¥200 押金）"
              hint="若二维码无法显示，请将图片放在 public/qr-xueyuan.jpg。"
            />
          </>
        ) : (
          <>
            <p className="channel-tag channel-public">公开报名通道</p>
            <QrPayBlock
              imageSrc="/qr-gongkai.jpg"
              title="公开报名 · 扫码付款（¥980，原价 ¥1980）"
              hint="若二维码无法显示，请将图片放在 public/qr-gongkai.jpg。"
            />
          </>
        )}
      </main>
    </div>
  );
}
