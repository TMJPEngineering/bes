import Kernel from '~/app/Http/Kernel';
import path from 'path';

export default app => {
    let globalMiddlewares = Kernel.middleware;
    let root = path.dirname(require.main.filename) + '/';

    globalMiddlewares.forEach(_path => {
        require(root + _path)(app);
    });
};
