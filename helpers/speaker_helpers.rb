module SpeakerHelpers
  def photo_path(speaker)
    ext = speaker.photo_ext || "jpg"
    filename = [speaker.first_name, speaker.last_name].map(&:downcase).join(" ")
    filename_with_ext = [filename, ext].join(".").gsub(" ", "-")
    "/images/speakers/#{filename_with_ext}"
  end
end
