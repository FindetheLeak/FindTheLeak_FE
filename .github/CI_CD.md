# GitHub Actions CI/CD 설정

## 자동 체크 항목

PR을 생성할 때 자동으로 다음 항목을 체크합니다:

### ✅ 체크 항목

1. **ESLint** - 코드 품질 검사
2. **Build** - 빌드 성공 여부 확인

## 워크플로우 파일

- `.github/workflows/ci.yml` - CI 파이프라인

## 로컬에서 미리 체크하기

PR 전에 로컬에서 미리 확인하세요:

```bash
# ESLint 체크
pnpm lint

# Prettier 포맷 체크
pnpm format:check

# 자동 포맷팅
pnpm format

# 빌드 테스트
pnpm build
```

## 주의사항

- 모든 체크를 통과해야 PR 머지가 가능합니다
- 실패 시 GitHub PR 페이지에서 상세 로그 확인 가능
