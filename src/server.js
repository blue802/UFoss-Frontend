import { createServer } from 'miragejs';

import coursesDummy from './mock-data.json';

export default function runServer() {
  const courses = coursesDummy;

  createServer({
    routes() {
      this.namespace = 'api';

      this.get(
        '/courses',
        () => {
          return courses;
        },
        { timing: 2000 }
      );

      this.post('/courses', (schema, request) => {
        const newCourse = JSON.parse(request.requestBody);
        const exist = courses.find(course => course.title === newCourse.title);
        if (exist > 0) {
          let headers = {};
          let data = { msg: 'The course does exist.' };
          return new Response(406, headers, data);
        }
        newCourse.id = Math.floor(Math.random() * 10000);
        courses.push(newCourse);
        return courses;
      });
    },
  });
}

// axios.post('api/courses', {
//     title: 'Basic JavaScript in 2 hours',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     photoUrl: 'https://picsum.photos/320/240',
//   });
