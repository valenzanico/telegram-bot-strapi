import { useFetchClient } from '@strapi/strapi/admin';
import type { IChat, IInformationAboutMe } from "../../../types/bot.types";

const { get, del, put } = useFetchClient();

const botRequest = {
  getMe: async (): Promise<IInformationAboutMe> => {
    return await get("/telegram-bot-strapi/me");
  },

  geChats: async (): Promise<IChat[]> => {
    return await get("/telegram-bot-strapi/find");
  },

  deleteChat: async (chat: IChat): Promise<IChat> => {
    const result = await del(`/telegram-bot-strapi/delete/${chat.id}`);

    return result;
  },

  updateChat: async (id: number, chat: IChat): Promise<IChat> => {
    const result = await put(`/telegram-bot-strapi/update/${id}`, {
      body: chat,
    });

    return result;
  },
};

export default botRequest;
