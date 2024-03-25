import { PartialType } from '@nestjs/mapped-types';
import { CreateEvoServicesPostDto } from './create-evo-services-post.dto';

export class UpdateEvoServicesPostDto extends PartialType(CreateEvoServicesPostDto) {}
