<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { scrollToTop } from '$lib/utils/scroll';
	import { getHrefFromEvent } from '$lib/utils/event';
	import { updateURL } from '$lib/utils/navigation';
	import { clearHash } from '$lib/utils/navigation';
	
	// 초기 상태를 URL 해시로 결정
	let isShowingContent = browser ? !window.location.hash : true;
	let currentPage = 0;
	let enableAnimation = false;

	onMount(() => {
		// 스크롤을 최상단으로
		scrollToTop();

		// 초기 로드 시 해시 확인
		const hash = window.location.hash;
		if (hash === '#godfather' || hash === '#Art.Godfather') {
			isShowingContent = false;
			currentPage = 1;
			enableAnimation = true;
		}
		
		// 해시 변경 감지 (뒤로가기/앞으로가기)
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash === '#godfather' || hash === '#Art.Godfather') {
				isShowingContent = false;
				currentPage = 1;
			} else {
				isShowingContent = true;
				currentPage = 0;
			}
			enableAnimation = true;
		};
		
		window.addEventListener('hashchange', handleHashChange);
		
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});

	const showContent = () => {
		enableAnimation = true;
		isShowingContent = true;
		currentPage = 0;
		clearHash();
	};

	const showPage = (e: Event, pageNum: number) => {
		e.preventDefault();
		enableAnimation = true;
		isShowingContent = false;
		currentPage = pageNum;
		
		const hash = getHrefFromEvent(e);
		if (hash) {
			updateURL(hash);
		}
	};
</script>

<div class="wrapper">
	<div class="layout">
		<div 
			class="card content-card" 
			class:slide-in={enableAnimation && isShowingContent} 
			class:slide-out={enableAnimation && !isShowingContent}
		>
			<h2 class="content-title">Contents</h2>

			<div class="sections">
				<div class="section">
					<h3 class="section-title">Art.</h3>
					<ul class="menu">
						<li class="menu-item">
							<a class="menu-link" href="#godfather" on:click={(e) => showPage(e, 1)}>
								Godfather
							</a>
							<span class="menu-number">1</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="card page-card" id="godfather" class:active={!isShowingContent && currentPage === 1}>
			<button class="back-btn" on:click={showContent}>
				&lt; 목차로
			</button>

			<h1 class="page-title">Art. Godfather</h1>

			<p class="page-text">
				영화 대부
			</p>
		</div>
	</div>
</div>

<style>
	@reference "tailwindcss";

	/* ==========================================================================
	   레이아웃
	   ========================================================================== */

	.wrapper {
		@apply flex w-full justify-center;
	}

	.layout {
		@apply p-10;
	}

	/* ==========================================================================
	   카드 공통
	   ========================================================================== */

	.card {
		width: 46rem;
		height: 64rem;
		border: 1px solid black;
		background-color: #fff;
	}

	/* ==========================================================================
	   목차 카드
	   ========================================================================== */

	.content-card {
		@apply flex flex-col items-center p-15;
		position: relative;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	.content-title {
		@apply mb-20 text-3xl;
	}

	.sections {
		@apply h-1/2 w-full;
	}

	.section {
		@apply w-1/3;
	}

	.section-title {
		@apply text-xl;
	}

	/* ==========================================================================
	   메뉴
	   ========================================================================== */

	.menu {
		@apply ml-3;
		list-style: none;
		border-left: 1px solid #000;
		padding-left: 20px;
	}

	.menu-item {
		@apply flex justify-between text-base;
	}

	.menu-link {
		@apply text-base no-underline;
	}

	.menu-link:hover {
		@apply underline;
	}

	.menu-number {
		color: #999;
	}

	/* ==========================================================================
	   본문 카드
	   ========================================================================== */

	.page-card {
		@apply flex flex-col items-center justify-center;
		@apply pb-[3.3rem] pl-[5rem] pr-[5rem] pt-[3.3rem];
		position: relative;
		top: -64rem;
		left: 0;
		z-index: 10;
		background: #ffffff;
	}

	.page-card.active {
		z-index: 100;
	}

	.back-btn {
		@apply cursor-pointer;
	}

	.page-title {
		@apply text-xl underline;
		margin: 0 0 3.3rem 0;
	}

	.page-text {
		@apply text-sm;
		white-space: pre-line;
		line-height: 30px;
	}

	/* ==========================================================================
	   애니메이션
	   ========================================================================== */

	@keyframes slide-in {
		0% {
			left: -20px;
			background-color: unset;
		}
		100% {
			left: 0;
			z-index: 1000;
			background-color: #fff;
		}
	}

	@keyframes slide-out {
		0% {
			left: 0;
			z-index: 1000;
			background-color: #fff;
		}
		35% {
			background-color: #fff;
		}
		100% {
			left: -20px;
			z-index: 0;	
			background-color: unset;
			color: #ffffff;
		}
	}

	.content-card.slide-in {
		animation: slide-in 0.7s ease forwards;
	}

	.content-card.slide-out {
		animation: slide-out 0.7s ease forwards;
	}
</style>