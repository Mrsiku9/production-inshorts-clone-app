import News from "../model/news-schema.js";

export const getNews = async (req, res) => {
  try {
    const response = await News.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: response.message });
  }
};
