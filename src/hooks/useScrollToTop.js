import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function useScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	}, [pathname]);
}