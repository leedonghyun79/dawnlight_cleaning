'use client';

import { useState, type FormEvent } from 'react';
import { company } from '@/data/company';

const spaceTypes = ['입주·이사', '거주 공간', '사무실·상업 공간', '건축·준공', '정기 관리', '기타'];

const fieldClass =
  'w-full rounded-md border border-border px-4 py-3 text-text-dark focus:outline-none focus:border-navy';

// 로컬 기준 오늘 날짜를 YYYY-MM-DD 형식으로 돌려준다 (date 입력칸 기본값용)
function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export default function InquiryForm() {
  const [agreed, setAgreed] = useState(false);

  // 서버 없이 사용자의 메일 앱으로 내용을 보낸다. 입력값은 이 사이트에 저장되지 않는다.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `이름: ${form.get('name')}`,
      `연락처: ${form.get('phone')}`,
      `지역: ${form.get('region')}`,
      `공간 유형: ${form.get('spaceType')}`,
      `면적(평): ${form.get('size')}`,
      `희망 일정: ${form.get('date')}`,
      `문의 내용: ${form.get('memo')}`,
    ];
    const subject = encodeURIComponent('[견적 문의] 홈페이지 폼');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border rounded-lg p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">이름 *</span>
          <input name="name" required className={fieldClass} />
        </label>
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">연락처 *</span>
          <input name="phone" type="tel" required placeholder="010-0000-0000" className={fieldClass} />
        </label>
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">지역</span>
          <input name="region" placeholder="예: 서울 강남구" className={fieldClass} />
        </label>
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">면적 (평)</span>
          <input name="size" placeholder="예: 32평" className={fieldClass} />
        </label>
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">공간 유형 *</span>
          <select name="spaceType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              선택해 주세요
            </option>
            {spaceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-[18px] font-semibold mb-2">희망 일정</span>
          <input type="date" name="date" defaultValue={todayIso()} className={fieldClass} />
        </label>
      </div>

      <label className="block">
        <span className="block text-[18px] font-semibold mb-2">문의 내용</span>
        <textarea name="memo" rows={4} className={fieldClass} />
      </label>

      <label className="flex items-start gap-3 text-[18px] text-text-muted">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-1"
        />
        <span>견적 답변을 위해 이름, 연락처, 지역 정보를 수집·이용하는 데 동의합니다. (필수)</span>
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className="w-full px-8 py-5 bg-navy text-white rounded-md text-[20px] font-bold hover:bg-navy/90 transition-colors disabled:bg-navy/40 disabled:cursor-not-allowed"
      >
        견적 문의하기
      </button>
    </form>
  );
}
