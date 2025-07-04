import { AssetsRepository } from "@/repositories/assets.repository.js";

export class AssetsService {
    constructor(private repo = new AssetsRepository()) {}

        async createAsset(code: string, name: string) {
            const assetExists = await this.repo.findByCode(code);
            if(assetExists.length > 0 ) {
                throw new Error("Ativo já cadastrado!");
            }

             return this.repo.create({ 
                code,
                name,
             })
        }

        async listAssets() {
            return this.repo.listAll();
        }
}