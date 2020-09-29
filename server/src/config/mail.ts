interface IMailDriver {
    driver: 'ethereal' | 'ses';
    defaults: {
        from: {
            email: string,
            name: string
        }
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'equipe@gobarber.com',
            name: 'Vinícius da GoBarber'
        }
    }
} as IMailDriver;