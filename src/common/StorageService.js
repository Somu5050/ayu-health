import MMKVStorage from "react-native-mmkv-storage";

class StorageService {

    MMKV = new MMKVStorage.Loader().initialize();

    async getAsyncStoreItem(key) {
        try {
            const hasKey = await this.MMKV.indexer.strings.hasKey(key);
            if(hasKey) {
                return this.MMKV.getStringAsync(key);
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    setAsyncStoreItem(key, value) {
        try {
            if (value != null) {
                this.MMKV.setStringAsync(key, JSON.stringify(value));
            }
        } catch (error) {
            console.log("Error saving data");
        }
    }

    removeAsyncStoreItem(key) {
        try {
            this.MMKV.removeItem(key);
        } catch (error) {
            console.log("Error removing data");
        }
    }

    getToken() {
        return this.getAsyncStoreItem("token");
    }

    setToken(data) {
        this.setAsyncStoreItem("token", data);
    }

    removeToken(){
        this.removeAsyncStoreItem("token")
    }
}

const storageService = new StorageService();
export default storageService;
