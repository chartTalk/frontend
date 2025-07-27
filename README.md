# 💡 프로젝트 소개

<p align="center">
  <img width="256" height="256" alt="Image" src="https://github.com/user-attachments/assets/23aaf63e-051d-44a8-afea-6d36efe7f7cd" />
</p>

<p align="center">
  차트 해석에 어려움을 겪는 <b>일반 사용자들</b>이
차트 이미지를 <b>업로드하기만 하면</b>,<br>
AI가 <b>표 구조를 추출</b>하고 <b>이해하기 쉬운 설명 문장</b>으로 <b>자동 변환</b>해주는 서비스입니다.
</p>

<br>
<br>

# 📖 목차
- [🔗 레포지토리 링크](#-레포지토리-링크)
- [🔥 동기](#-동기)
- [🛠️ 기술 스택](#️-기술-스택)
  - [🤔 Flask 사용한 이유](#-flask-사용한-이유)
  - [🤔 Docker 사용한 이유](#-docker-사용한-이유)
- [✨ 기능](#-기능)
  - [1. 차트 구조 해설](#1-차트-구조-해설)
- [🏋 도전](#-도전)
  - [1. 차트 이미지만으로 어떻게 설명 문장을 생성할 수 있을까?](#1-차트-이미지만으로-어떻게-설명-문장을-생성할-수-있을까)

<br>
<br>

# 🔗 레포지토리 링크
* [frontend](https://github.com/chartTalk/frontend)
* [backend](https://github.com/chartTalk/backend)
* [Flask](https://github.com/chartTalk/Flask)

<br>
<br>

# 🔥 동기

<b>차트 이미지에 담긴 정보를 자동으로 텍스트화하여</b> <b>누구나 쉽게 이해하고 공유할 수 있다면</b>,<br>데이터 기반 커뮤니케이션이 훨씬 더 효율적일 것입니다.

기존에는 차트 이미지를 해석하려면 사람이 수작업으로 <b>표를 읽고 설명을 직접 작성해야 했습니다</b>.<br>이는 시간도 오래 걸리고, 보는 사람에 따라 표현 방식이 달라져 <b>정보 전달의 일관성이 떨어지는 문제</b>가 있었습니다.

이러한 문제를 해결하기 위해 <b>시각적 데이터를 구조화하는 모델(DEPLOT)</b>과 <b>구조화된 데이터를 자연어로 설명해주는 모델(KE-T5)</b>를 활용했습니다.

이 두 모델을 기반으로 <b>사용자가 이미지를 업로드하기만 하면</b>, AI가 <b>자동으로 표를 인식하고</b> 그 내용을 <b>쉽게 풀어주는 설명 문장</b>을 생성하는 웹 서비스를 만들게 되었습니다.

<br>
<br>

# 🛠️ 기술 스택

## Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-61DAFB?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB & Mongoose](https://img.shields.io/badge/MongoDB%20&%20Mongoose-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569AFA?style=for-the-badge&logo=amazonaws&logoColor=white)

## Flask
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![Transformers](https://img.shields.io/badge/Transformers-FFD700?style=for-the-badge&logo=huggingface&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


<br>

## 🤔 Flask 사용한 이유

ChartTalk의 추론 서버는 <b>AI 모델(DEPLOT, KE-T5)</b> 을 로딩해 실시간 추론을 수행해야 하므로,<Br>
<b>가볍고 빠르게 API를 구성할 수 있는 Python 기반 웹 프레임워크</b>가 필요했습니다.

<b>Flask</b>는 다음과 같은 이유로 선택되었습니다:

- <b>복잡한 설정 없이 빠르게 REST API 구현 가능</b><br>
→ 모델 로딩부터 POST 요청 처리까지 단일 라우트로 간단하게 구성 가능

- <b>Python AI 생태계(PyTorch, HuggingFace)와의 호환성</b><br>
→ 추론 로직이 Python 기반인 만큼, Flask는 학습 코드와의 연결이 자연스럽고 유지보수도 용이

<br>

## 🤔 Docker 사용한 이유

ChartTalk의 추론 서버는 <b>무거운 사전 학습 AI 모델과 여러 종속성</b>을 포함하고 있으며,<br><b>환경별로 실행 결과가 달라질 수 있습니다</b>.

<b>Docker</b>를 사용하면 다음과 같은 장점이 있습니다:

- <b>개발 환경과 운영 환경을 완전히 동일하게 유지 가능</b><br>
  → 로컬에서 잘 되던 코드가 서버에서는 에러나는 문제 방지

- <b>AI 모델 배포 자동화 및 이식성 향상</b><br>
  → 다른 팀원이나 서버에서 손쉽게 컨테이너 실행만으로 서버 구동 가능

- <b>모델, 라이브러리, 시스템 환경까지 한 번에 패키징</b><br>
  → 복잡한 설치 절차 없이 <code>docker run</code>만으로 실행 가능

<br>
<br>

# ✨ 기능

### 1. 차트 구조 해설
<b>차트 이미지를 업로드</b>하고 <b>전송</b>하면, <b>차트 구조를 설명 문장 형식</b>으로 보여줍니다.

<b>사용자</b>는 <b>차트 이미지를 업로드</b>한 후 <b>전송 버튼</b>만 클릭하면 됩니다.

그 순간, <b>AI는 이미지를 자동으로 분석</b>하여 <b>표의 구조를 이해</b>하고, 해당 내용을 <b>사람이 읽기 쉬운 설명 문장</b>으로 만들어냅니다.

이 설명은 <b>채팅창 형태의 화면</b>에 <b>실시간으로 출력</b>되어, 마치 <b>AI가 해설해주는 것처럼</b> 사용자에게 <b>자연스럽게 전달</b>됩니다.

<b>복잡한 설정이나 추가 입력 없이</b>, <b>누구나 손쉽게 차트를 이해</b>할 수 있도록 돕는 <b>핵심 기능</b>입니다.

<br>

<br>
<br>

# 🏋 도전

## 1. 차트 이미지만으로 어떻게 설명 문장을 생성할 수 있을까?
이 프로젝트에서 가장 핵심적인 기술적 도전은
<b>“단 하나의 차트 이미지로부터 어떻게 사람이 이해할 수 있는 설명 문장을 만들 수 있을까?”</b>였습니다.<br>

차트 이미지는 텍스트 기반이 아닌 <b>비정형 시각 정보</b>이기 때문에,
단순한 OCR만으로는 구조나 의미를 파악할 수 없고,
<code>축 정보</code>, <code>범례</code>, <code>데이터 값</code> 등을 스스로 추론해야 합니다.<br>

이를 해결하기 위해 두 가지 AI 모델을 연계한 파이프라인을 구축했습니다:

### ✅ 1단계: 이미지 → 구조화된 데이터<br>
- AI Hub에서 제공하는 <b>차트 이미지-표 짝 데이터셋</b>을 기반으로 학습된
<b>DEPLOT</b> 모델을 활용했습니다.<br>
- 이 모델은 차트 이미지를 입력받아 <b>축 이름, 데이터 값, 레이블</b> 등이 포함된
<code>표 형태의 JSON</code> 데이터를 출력합니다.<br>
- 즉, 눈에 보이는 차트를 <b>기계가 이해 가능한 구조</b>로 바꿔주는 단계입니다.

### ✅ 2단계: 구조화된 데이터 → 설명 문장<br>
- 이렇게 변환된 JSON 데이터는 사람이 보기에는 직관적이지 않기 때문에,<br>
<b>KE-T5</b> 모델을 사용해 <b>자연어 설명</b>으로 재생성하였습니다.
- KE-T5는 AI Hub에 포함된 <b>차트 텍스트 요약 데이터셋</b>을 활용해 학습되어 있어,<br>
표 데이터를 입력받으면 <b>마치 사람이 설명하듯 문장</b>을 출력해줍니다.

이 두 모델을 Flask 기반의 추론 서버에서 하나의 흐름으로 연결하고,
프론트엔드에서 이미지를 업로드하면 <b>실시간으로 결과가 채팅 UI에 출력</b>되도록 구현하였습니다
