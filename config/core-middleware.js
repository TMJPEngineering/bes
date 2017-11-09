import Kernel from '~/app/Http/Kernel';
import path from 'path';

export default app => {
    let globalMiddlewares = Kernel.middleware;
    let root = path.dirname(require.main.filename) + '/';

    globalMiddlewares.forEach(_path => {
        app.use(require(root + _path));
    });
}
