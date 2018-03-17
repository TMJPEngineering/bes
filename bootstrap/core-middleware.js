import Kernel from '~/app/Http/Kernel';
import { dirname } from 'path';

export default app => {
    let globalMiddlewares = Kernel.middleware;
    let root = dirname(require.main.filename) + '/';

    globalMiddlewares.forEach(_path => {
        require(root + _path)(app);
    });
};
