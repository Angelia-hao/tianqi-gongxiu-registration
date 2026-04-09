import { useState } from 'react';

type Props = {
  imageSrc: string;
  title: string;
  hint: string;
};

export function QrPayBlock({ imageSrc, title, hint }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="qr-block">
      <h2 className="qr-block-title">{title}</h2>
      <div className="qr-frame">
        {!failed ? (
          <img
            src={imageSrc}
            alt={`${title}付款二维码`}
            className="qr-img"
            onError={() => setFailed(true)}
          />
        ) : null}
        {failed ? (
          <div className="qr-placeholder" role="status">
            <p className="qr-placeholder-title">二维码待配置</p>
            <p className="qr-placeholder-text">{hint}</p>
          </div>
        ) : null}
      </div>
      {!failed ? (
        <p className="qr-pay-hint">长按二维码付款</p>
      ) : null}
    </div>
  );
}
