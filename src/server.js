import { createServer, Model } from 'miragejs';

import coursesDummy from './mock-data.json';

export default function runServer() {
  createServer({
    models: {
      course: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get(
        '/courses',
        (schema, request) => {
          return schema.courses.all();
        },
        { timing: 2000 }
      );

      this.get(
        '/courses/:id',
        (schema, request) => {
          const id = request.params.id;
          return schema.courses.find(id);
        },
        { timing: 2000 }
      );
    },
    seeds(server) {
      coursesDummy.forEach(course => {
        server.create('course', course);
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
