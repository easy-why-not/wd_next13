// import axios from 'axios';
// import { GetServerSidePropsContext } from 'next';
// import nookies from 'nookies';
//
// import { UserService } from '@/src/api/user';
//
// export const checkAuth = async (ctx: GetServerSidePropsContext) => {
//   const { access } = nookies.get(ctx);
//   axios.defaults.headers.Authorization = ` ${access}`;
//   try {
//     const user = await UserService.getMe();
//     return {
//       props: { user }
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         destination: 'sign-in',
//         permanent: false
//       }
//     };
//   }
// };
