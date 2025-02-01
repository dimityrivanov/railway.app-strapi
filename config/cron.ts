// module.exports =  {
//     /**
//      * Simple examples.
//      */
//     '*/1 * * * *': async () => {
//       console.log("🚀 ~ file: cron.js ~ executing action ~Every 1min");

//       try {
//         // Reset the bookings
//         await strapi.db.query('api::booking.booking').updateMany({
//             where: { isBooked: true },
//             data: { isBooked: false },
//           });
//         console.log('✅ Bookings reset successfully (every minute)');
//       } catch (error) {
//         console.log(error);
//       }
//     },  
//   };