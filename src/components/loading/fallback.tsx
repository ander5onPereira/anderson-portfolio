import Loading from './';

export default function LoadingFallback() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Loading />
      </div>
    </div>
  );
}
