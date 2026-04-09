import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerLogo } from '../components/CornerLogo';

export function HomePage() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!/^\d+$/.test(trimmed)) {
      setError('请输入数字形式的天启 ID');
      return;
    }
    setError('');
    navigate(`/zhifu?id=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className="page">
      <CornerLogo />
      <main className="main-card">
        <p className="eyebrow">天启无书 · 共修营</p>
        <h1 className="page-title">报名链接</h1>
        <p className="lead">
          请先输入您的<strong>天启 ID</strong>，我们将为您匹配对应的报名与付款方式。
        </p>
        <form className="form" onSubmit={onSubmit}>
          <label className="label" htmlFor="tianqi-id">
            天启 ID
          </label>
          <input
            id="tianqi-id"
            name="tianqiId"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            className="input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError('');
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'tianqi-error' : undefined}
          />
          {error ? (
            <p id="tianqi-error" className="field-error" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit" className="btn btn-primary">
            下一步
          </button>
        </form>
      </main>
    </div>
  );
}
