// import { parseCookies } from 'nookies';
// import { useCallback, useRef, useState } from 'react';
//
// import { IInstance, IInstances } from '@/api/dto/pg/pgInstances.dto';
// import { axiosInstance } from '@/core/axios';
//
// export interface UseInfiniteScroll {
//   isLoading?: boolean;
//   loadMoreCallback?: (el: HTMLDivElement) => void;
//   dynamicPosts: IInstance[];
//   isLastPage?: boolean;
//   hasDynamicPosts: boolean;
// }
//
// export const useInfiniteScroll = (url: string): UseInfiniteScroll => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(2);
//   const [dynamicPosts, setDynamicPosts] = useState<IInstance[]>([]);
//   const [isLastPage, setIsLastPage] = useState(false);
//   const observerRef = useRef<IntersectionObserver>();
//   const loadMoreTimeout: NodeJS.Timeout = setTimeout(() => null, 500);
//   const loadMoreTimeoutRef = useRef<NodeJS.Timeout>(loadMoreTimeout);
//   const [hasDynamicPosts, setHasDynamicPosts] = useState(false);
//
//   const handleObserver = useCallback(
//     (entries: any[]) => {
//       const target = entries[0];
//       if (target.isIntersecting) {
//         setIsLoading(true);
//         clearTimeout(loadMoreTimeoutRef.current);
//
//         loadMoreTimeoutRef.current = setTimeout(() => {
//           const urlStr: string = `${url}?page=${page}`;
//           const access = parseCookies();
//
//           axiosInstance
//             .get<IInstances>(`${urlStr}`, {
//               headers: {
//                 Authorization: `WatchDog ${access.access}`
//               }
//             })
//             .then((res) => res.data)
//             .then((data) => {
//               setPage(page + 1);
//               const newPosts = data.results;
//
//               if (newPosts?.length) {
//                 const newDynamicPosts = [...dynamicPosts, ...newPosts];
//                 setDynamicPosts(newDynamicPosts);
//                 setIsLastPage(newDynamicPosts?.length === data.count);
//                 setIsLoading(false);
//                 setHasDynamicPosts(true);
//               }
//             })
//             .catch((err) => new Error(err));
//         }, 800);
//       }
//     },
//     [loadMoreTimeoutRef, setIsLoading, page, dynamicPosts]
//   );
//
//   const loadMoreCallback = useCallback(
//     (el: HTMLDivElement) => {
//       if (isLoading) return;
//       if (observerRef.current) observerRef.current.disconnect();
//
//       const option: IntersectionObserverInit = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 1.0
//       };
//       observerRef.current = new IntersectionObserver(handleObserver, option);
//
//       if (el) observerRef.current.observe(el);
//     },
//     [handleObserver, isLoading]
//   );
//   return {
//     isLoading,
//     loadMoreCallback,
//     dynamicPosts,
//     isLastPage,
//     hasDynamicPosts
//   };
// };
export {};
