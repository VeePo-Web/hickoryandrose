import editorialImage from "@/assets/editorial-florals.jpg";

const EditorialImageBreak = () => {
  return (
    <section className="w-full" aria-label="Editorial wedding detail">
      <div className="aspect-[21/9] md:aspect-[21/9] w-full overflow-hidden">
        <img
          src={editorialImage}
          alt="Elegant floral arrangement with sage eucalyptus and ivory garden roses in warm natural light"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={823}
        />
      </div>
    </section>
  );
};

export default EditorialImageBreak;
