import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '../../../services/ListProviderDayAvailabilityService'

class ProviderDayAvailabilityController {
    public async index(req: Request, res: Response): Promise<Response> {
        try {
            const { provider_id } = req.params;
            const { day, month, year } = req.body;

            const listProviderDayAvailability = container.resolve(ListProviderDayAvailabilityService);
    
            const availability = await listProviderDayAvailability.execute({
                provider_id,
                day,
                month,
                year
            });
    
            return res.json(availability);
        } catch(err) {
            return res.status(err.statusCode).json(err.message);
        }
    }
}

export default ProviderDayAvailabilityController;