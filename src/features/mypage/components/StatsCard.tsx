export default function StatsCard() {
  return (
    <div className="flex h-[288px] w-[671px] flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-10">
      <div className="flex flex-1 flex-col items-start justify-center gap-10 self-stretch">
        <div className="flex items-center gap-10">
          <div className="flex h-[119px] w-[119px] flex-col items-center justify-center gap-2.5 rounded-[99px] bg-[#E5E5E5] p-[34px_19px] shadow-[0_0_18px_0_rgba(0,0,0,0.45)_inset]">
            <span className="text-xs leading-[100%] font-[700] text-[#C2C2C2]">
              SILVER
            </span>
          </div>
          <div className="flex w-[367px] flex-col items-start gap-5">
            <div className="flex w-[127px] flex-col items-start gap-3">
              <div className="flex items-center gap-[5px]">
                <span className="text-xl leading-[100%] font-[700] text-[#282A2D]">
                  SILVER
                </span>
                <span className="text-xl leading-[100%] font-[700] text-[#282A2D]">
                  등급
                </span>
              </div>
              <div className="flex items-center gap-[22px] self-stretch">
                <div className="flex items-center gap-0.5">
                  <span className="text-xs leading-[100%] font-[400] text-[#5F6368]">
                    1,432
                  </span>
                  <span className="text-xs leading-[100%] font-[400] text-[#5F6368]">
                    SP
                  </span>
                </div>
                <div className="flex items-center gap-[5px]">
                  <span className="text-xs leading-[100%] font-[400] text-[#5F6368]">
                    전체
                  </span>
                  <div className="flex items-center">
                    <span className="text-xs leading-[100%] font-[400] text-[#5F6368]">
                      15
                    </span>
                    <span className="text-xs leading-[100%] font-[400] text-[#5F6368]">
                      등
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap content-center items-center gap-10 self-stretch">
              <div className="flex w-[62px] flex-col items-start gap-2">
                <span className="self-stretch text-xs leading-[100%] text-[#9AA0A6]">
                  승인률
                </span>
                <span className="self-stretch text-2xl leading-[100%] text-[#3B82F6]">
                  89%
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs leading-[100%] text-[#9AA0A6]">
                  보고서 평판 점수
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl leading-[100%] text-[#3B82F6]">
                    0
                  </span>
                  <span className="text-lg leading-[100%] text-[#5F6368]">
                    점
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs leading-[100%] text-[#9AA0A6]">
                  평균 영향력
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl leading-[100%] text-[#3B82F6]">
                    0
                  </span>
                  <span className="text-lg leading-[100%] text-[#5F6368]">
                    점
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs leading-[100%] text-[#9AA0A6]">
                  종합점수
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-2xl leading-[100%] text-[#3B82F6]">
                    0
                  </span>
                  <span className="text-lg leading-[100%] text-[#5F6368]">
                    점
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex items-center justify-between self-stretch">
            <div className="flex items-center gap-1.5">
              <span className="text-xs leading-[100%] text-[#80868B]">
                제출 보고서 수
              </span>
              <span className="text-xs leading-[100%] text-[#80868B]">0</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#3B82F6" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-[100%] text-[#80868B]">
                  승인
                </span>
                <span className="text-xs leading-[100%] text-[#80868B]">0</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FE5D9F" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-[100%] text-[#80868B]">
                  거절
                </span>
                <span className="text-xs leading-[100%] text-[#80868B]">0</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FFB366" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-[100%] text-[#80868B]">
                  진행중
                </span>
                <span className="text-xs leading-[100%] text-[#80868B]">0</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-[100%] text-[#80868B]">
                  보류중
                </span>
                <span className="text-xs leading-[100%] text-[#80868B]">0</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#DADCE0" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-[100%] text-[#80868B]">
                  지급 완료
                </span>
                <span className="text-xs leading-[100%] text-[#80868B]">0</span>
              </div>
            </div>
          </div>
          <div className="relative h-3 self-stretch">
            <div className="absolute top-0 left-0 h-3 w-full rounded-lg bg-[#E8EAED]"></div>
            <div className="absolute top-0 left-0 flex h-3 w-full items-start justify-center">
              <div className="absolute top-0 left-0 h-3 w-[144px] shrink-0 rounded-l-lg bg-[#3B82F6]"></div>
              <div className="absolute top-0 left-[144px] h-3 w-[144px] shrink-0 bg-[#FE5D9F]"></div>
              <div className="absolute top-0 left-[288px] h-3 w-[144px] shrink-0 bg-[#FFB366]"></div>
              <div className="absolute top-0 left-[432px] h-3 w-[112px] shrink-0 bg-[#282A2D]"></div>
              <div className="absolute top-0 left-[544px] h-3 w-[47px] shrink-0 rounded-r-lg bg-[#DADCE0]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
