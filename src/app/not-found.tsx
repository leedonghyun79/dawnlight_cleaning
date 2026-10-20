import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-sm font-bold tracking-widest text-navy mb-3">404</p>
        <h1 className="text-h2 mb-4">찾으시는 페이지가 없어요</h1>
        <p className="text-text-muted mb-10">주소가 바뀌었거나 잘못 입력되었을 수 있어요. 아래에서 원하는 페이지를 찾아보세요.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="md" asLink href="/">
            홈으로 가기
          </Button>
          <Button variant="secondary" size="md" asLink href="/contact">
            문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
