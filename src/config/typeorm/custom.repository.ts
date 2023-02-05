import { SetMetadata } from '@nestjs/common';

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

/**
 * TypeORM 0.3.0에서 deprecated된 @EntityRepository 대체를 위한 Custom Decorator
 * @param entity
 * @constructor
 */
export function CustomRepository(entity): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}
