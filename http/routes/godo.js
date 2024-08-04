import fs from 'node:fs/promises';

import { Router } from 'express';
import { title } from 'node:process';

const router = new Router();

router.get('/', async (req, res) => {
    const title = 'Монолог ЛАКІ';
    const text = await fs.readFile('./monolog.txt', 'utf8');

    res.render('index', {
        title: title,
        text: text,
    });


});

export default router;