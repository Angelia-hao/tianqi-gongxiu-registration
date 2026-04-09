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

        <div className="notice">
          <p className="notice-title">天启无书·纠偏培优体系｜《父母学习·孩子蜕变》共修营启动通知☀️☀️☀️</p>
          <div className="notice-body">
            <p>各位家长：</p>
            <p>为支撑更多家庭看清孩子问题根源、吃透体系核心思想与纠偏方案底层逻辑，体系老师历经近两年深度共学打磨，结合往期家庭优质学习反馈，正式推出前端线上精品伴学营——《父母学习·孩子蜕变》成长营，由体系资深老师引领，课程循序渐进、层层提升。</p>
            <p>若你正为孩子教育问题苦恼，这场学习能帮你找到教育困惑的核心答案。</p>
            <p>往期课程免费开放时，不少家庭因零成本未重视学习投入。为坚守共修初心，让大家一次学习、终身受益，第三期共修营正式启动收费。</p>
            <hr className="notice-divider" />
            <p className="notice-section-title">💰 收费标准</p>
            <ul className="notice-rules">
              <li>未建档家长：学费 980元</li>
              <li>已建档家长：免学费，仅需缴纳 200元押金</li>
            </ul>
            <p className="notice-section-title">📌 学习规则</p>
            <ul className="notice-rules">
              <li>每期营期开启后，社群停止新增人员。</li>
              <li>迟到15分钟，会议室自动关闭。</li>
              <li>每日设3个学习时段，灵活参与。</li>
              <li>未建档家长无故缺席超3次，不能够建档。</li>
              <li>建档家长无故缺席超3次，押金不予退还。</li>
            </ul>
            <p className="notice-section-title">🎯 共修营主旨</p>
            <p>父母有道，孩子有路。蜕变营不以说教为旨，不以喧嚣为势。以伴学为根，实操为要，纠偏为径，培优为果。</p>
            <hr className="notice-divider" />
            <p className="notice-section-title">📅 营期信息</p>
            <ul className="notice-rules">
              <li><span className="notice-highlight">开营时间：</span>4月13日—4月27日</li>
              <li><span className="notice-highlight">每日时段：</span>06:00—08:00 / 14:30—16:30 / 20:00—22:00</li>
              <li><span className="notice-highlight">报名截止：</span>4月12日 18:00</li>
              <li><span className="notice-highlight">报名方式：</span>课程链接缴费后，进群小助手邀请进群</li>
              <li><span className="notice-highlight">咨询老师：</span>范老师 18566218663</li>
            </ul>
          </div>
        </div>

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
