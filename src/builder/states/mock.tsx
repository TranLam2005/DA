import type {Page, TreeNode} from "./types";

export const pageExample1: Page = {
    id: "page-001",
    title: "Hướng dẫn du lịch Việt Nam",
    slug: "huong-dan-du-lich-viet-nam",
    content: {
        id: "root-node",
        label: "Trang chính",
        type: "frame",
        setting: {
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                maxWidth: "1000px",
                margin: "0 auto",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f8f9fa",
            },
        },
        children: [
            {
                id: "header-section",
                label: "Phần tiêu đề",
                type: "frame",
                setting: {
                    style: {
                        textAlign: "center",
                        marginBottom: "30px",
                        padding: "20px",
                        backgroundColor: "#05754e",
                        color: "white",
                        borderRadius: "8px",
                    },
                },
                children: [
                    {
                        id: "main-title",
                        label: "Tiêu đề chính",
                        type: "text",
                        setting: {
                            content: "Khám phá Việt Nam",
                            style: {
                                fontSize: "32px",
                                fontWeight: "bold",
                                marginBottom: "10px",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "subtitle",
                        label: "Tiêu đề phụ",
                        type: "text",
                        setting: {
                            content: "Hành trình khám phá vẻ đẹp thiên nhiên và văn hóa",
                            style: {
                                fontSize: "18px",
                                fontStyle: "italic",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "header-image",
                        label: "Ảnh bìa",
                        type: "image",
                        setting: {
                            src: "https://placehold.co/800x400",
                            alt: "Toàn cảnh Vịnh Hạ Long",
                            style: {
                                width: "100%",
                                height: "auto",
                                borderRadius: "6px",
                                marginTop: "15px",
                            },
                        },
                        children: [],
                    },
                ],
            },
            {
                id: "intro-section",
                label: "Phần giới thiệu",
                type: "frame",
                setting: {
                    style: {
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                },
                children: [
                    {
                        id: "intro-title",
                        label: "Tiêu đề giới thiệu",
                        type: "text",
                        setting: {
                            content: "Giới thiệu về Việt Nam",
                            style: {
                                fontSize: "24px",
                                fontWeight: "bold",
                                marginBottom: "15px",
                                color: "#05754e",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "intro-text",
                        label: "Nội dung giới thiệu",
                        type: "text",
                        setting: {
                            content:
                                "Việt Nam là một quốc gia nằm ở Đông Nam Á, với đường bờ biển dài hơn 3.000 km, nhiều danh lam thắng cảnh tuyệt đẹp và nền ẩm thực phong phú.",
                            style: {
                                fontSize: "16px",
                                lineHeight: "1.6",
                                marginBottom: "15px",
                                color: "#333",
                            },
                        },
                        children: [],
                    },
                ],
            },
            {
                id: "destinations-section",
                label: "Phần điểm đến",
                type: "frame",
                setting: {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                },
                children: [
                    {
                        id: "destinations-title",
                        label: "Tiêu đề điểm đến",
                        type: "text",
                        setting: {
                            content: "Những điểm đến không thể bỏ qua",
                            style: {
                                fontSize: "24px",
                                fontWeight: "bold",
                                marginBottom: "15px",
                                color: "#05754e",
                                textAlign: "center",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "destinations-grid",
                        label: "Lưới điểm đến",
                        type: "frame",
                        setting: {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                                gap: "20px",
                                marginTop: "15px",
                            },
                        },
                        children: [
                            {
                                id: "destination-hanoi",
                                label: "Điểm đến Hà Nội",
                                type: "frame",
                                setting: {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    },
                                },
                                children: [
                                    {
                                        id: "hanoi-image",
                                        label: "Ảnh Hà Nội",
                                        type: "image",
                                        setting: {
                                            src: "https://placehold.co/250x150",
                                            alt: "Hà Nội - Phố cổ và Hồ Hoàn Kiếm",
                                            style: {
                                                width: "100%",
                                                height: "150px",
                                                objectFit: "cover",
                                            },
                                        },
                                        children: [],
                                    },
                                    {
                                        id: "hanoi-content",
                                        label: "Nội dung Hà Nội",
                                        type: "frame",
                                        setting: {
                                            style: {
                                                padding: "15px",
                                            },
                                        },
                                        children: [
                                            {
                                                id: "hanoi-title",
                                                label: "Tiêu đề Hà Nội",
                                                type: "text",
                                                setting: {
                                                    content: "Hà Nội",
                                                    style: {
                                                        fontSize: "20px",
                                                        fontWeight: "bold",
                                                        marginBottom: "8px",
                                                        color: "#333",
                                                    },
                                                },
                                                children: [],
                                            },
                                            {
                                                id: "hanoi-description",
                                                label: "Mô tả Hà Nội",
                                                type: "text",
                                                setting: {
                                                    content:
                                                        "Thủ đô ngàn năm văn hiến với phố cổ 36 phố phường.",
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.5",
                                                        color: "#555",
                                                    },
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "destination-halong",
                                label: "Điểm đến Hạ Long",
                                type: "frame",
                                setting: {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    },
                                },
                                children: [
                                    {
                                        id: "halong-image",
                                        label: "Ảnh Hạ Long",
                                        type: "image",
                                        setting: {
                                            src: "https://placehold.co/250x150",
                                            alt: "Vịnh Hạ Long - Di sản thiên nhiên thế giới",
                                            style: {
                                                width: "100%",
                                                height: "150px",
                                                objectFit: "cover",
                                            },
                                        },
                                        children: [],
                                    },
                                    {
                                        id: "halong-content",
                                        label: "Nội dung Hạ Long",
                                        type: "frame",
                                        setting: {
                                            style: {
                                                padding: "15px",
                                            },
                                        },
                                        children: [
                                            {
                                                id: "halong-title",
                                                label: "Tiêu đề Hạ Long",
                                                type: "text",
                                                setting: {
                                                    content: "Vịnh Hạ Long",
                                                    style: {
                                                        fontSize: "20px",
                                                        fontWeight: "bold",
                                                        marginBottom: "8px",
                                                        color: "#333",
                                                    },
                                                },
                                                children: [],
                                            },
                                            {
                                                id: "halong-description",
                                                label: "Mô tả Hạ Long",
                                                type: "text",
                                                setting: {
                                                    content:
                                                        "Di sản thiên nhiên thế giới với hơn 1.600 hòn đảo đá vôi.",
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.5",
                                                        color: "#555",
                                                    },
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "cuisine-section",
                label: "Phần ẩm thực",
                type: "frame",
                setting: {
                    style: {
                        padding: "20px",
                        backgroundColor: "#fff9f1",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                },
                children: [
                    {
                        id: "cuisine-title",
                        label: "Tiêu đề ẩm thực",
                        type: "text",
                        setting: {
                            content: "Ẩm thực Việt Nam",
                            style: {
                                fontSize: "24px",
                                fontWeight: "bold",
                                marginBottom: "15px",
                                color: "#d35400",
                                textAlign: "center",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "cuisine-items",
                        label: "Danh sách món ăn",
                        type: "frame",
                        setting: {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "15px",
                            },
                        },
                        children: [
                            {
                                id: "cuisine-pho",
                                label: "Món phở",
                                type: "frame",
                                setting: {
                                    style: {
                                        flex: "1 0 250px",
                                        display: "flex",
                                        backgroundColor: "#fff",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                children: [
                                    {
                                        id: "pho-image",
                                        label: "Ảnh phở",
                                        type: "image",
                                        setting: {
                                            src: "https://placehold.co/100x100",
                                            alt: "Phở - Món ăn truyền thống Việt Nam",
                                            style: {
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "cover",
                                            },
                                        },
                                        children: [],
                                    },
                                    {
                                        id: "pho-content",
                                        label: "Nội dung phở",
                                        type: "frame",
                                        setting: {
                                            style: {
                                                padding: "12px",
                                            },
                                        },
                                        children: [
                                            {
                                                id: "pho-title",
                                                label: "Tiêu đề phở",
                                                type: "text",
                                                setting: {
                                                    content: "Phở",
                                                    style: {
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        marginBottom: "5px",
                                                        color: "#d35400",
                                                    },
                                                },
                                                children: [],
                                            },
                                            {
                                                id: "pho-description",
                                                label: "Mô tả phở",
                                                type: "text",
                                                setting: {
                                                    content:
                                                        "Món ăn quốc hồn quốc túy với nước dùng thơm ngon.",
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#555",
                                                        lineHeight: "1.4",
                                                    },
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "cuisine-banh-mi",
                                label: "Món bánh mì",
                                type: "frame",
                                setting: {
                                    style: {
                                        flex: "1 0 250px",
                                        display: "flex",
                                        backgroundColor: "#fff",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                children: [
                                    {
                                        id: "banh-mi-image",
                                        label: "Ảnh bánh mì",
                                        type: "image",
                                        setting: {
                                            src: "https://placehold.co/100x100",
                                            alt: "Bánh mì Việt Nam",
                                            style: {
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "cover",
                                            },
                                        },
                                        children: [],
                                    },
                                    {
                                        id: "banh-mi-content",
                                        label: "Nội dung bánh mì",
                                        type: "frame",
                                        setting: {
                                            style: {
                                                padding: "12px",
                                            },
                                        },
                                        children: [
                                            {
                                                id: "banh-mi-title",
                                                label: "Tiêu đề bánh mì",
                                                type: "text",
                                                setting: {
                                                    content: "Bánh mì",
                                                    style: {
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        marginBottom: "5px",
                                                        color: "#d35400",
                                                    },
                                                },
                                                children: [],
                                            },
                                            {
                                                id: "banh-mi-description",
                                                label: "Mô tả bánh mì",
                                                type: "text",
                                                setting: {
                                                    content:
                                                        "Ổ bánh mì giòn với nhân đa dạng, kết hợp giữa ẩm thực Pháp và Việt Nam.",
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#555",
                                                        lineHeight: "1.4",
                                                    },
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "footer-section",
                label: "Phần chân trang",
                type: "frame",
                setting: {
                    style: {
                        padding: "15px",
                        backgroundColor: "#05754e",
                        color: "white",
                        borderRadius: "8px",
                        textAlign: "center",
                        marginTop: "20px",
                    },
                },
                children: [
                    {
                        id: "footer-text",
                        label: "Nội dung chân trang",
                        type: "text",
                        setting: {
                            content:
                                "© 2025 Hướng dẫn Du lịch Việt Nam. Tất cả các quyền được bảo lưu.",
                            style: {
                                fontSize: "14px",
                            },
                        },
                        children: [],
                    },
                ],
            },
        ],
    } as TreeNode,
};

export const examplePage2: Page = {
    id: "page-demo-001",
    title: "Trang Demo Hoàn Chỉnh",
    slug: "trang-demo-hoan-chinh",
    content: {
        id: "frame-root-001",
        label: "Root Container",
        type: "frame",
        setting: {
            style: {
                display: "flex",
                flexDirection: "column",
                padding: 20,
                backgroundColor: "#f0f4f8",
                minHeight: "100vh",
            },
        },
        children: [
            // Header
            {
                id: "frame-header-002",
                label: "Header",
                type: "frame",
                setting: {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 16,
                        backgroundColor: "#ffffff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    },
                },
                children: [
                    {
                        id: "text-logo-003",
                        label: "Logo",
                        type: "text",
                        setting: {
                            content: "MyCompany",
                            style: {
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                color: "#1f2937",
                            },
                        },
                        children: [],
                    },
                    {
                        id: "frame-nav-004",
                        label: "Navigation",
                        type: "frame",
                        setting: {
                            style: { display: "flex", gap: 24 },
                        },
                        children: [
                            {
                                id: "text-home-005",
                                label: "Home",
                                type: "text",
                                setting: {
                                    content: "Home",
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                    },
                                },
                                children: [],
                            },
                            {
                                id: "text-about-006",
                                label: "About",
                                type: "text",
                                setting: {
                                    content: "About",
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                    },
                                },
                                children: [],
                            },
                            {
                                id: "text-services-007",
                                label: "Services",
                                type: "text",
                                setting: {
                                    content: "Services",
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                    },
                                },
                                children: [],
                            },
                            {
                                id: "text-contact-008",
                                label: "Contact",
                                type: "text",
                                setting: {
                                    content: "Contact",
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        color: "#4b5563",
                                    },
                                },
                                children: [],
                            },
                        ],
                    },
                ],
            },
            // Hero Section
            {
                id: "frame-hero-009",
                label: "Hero Section",
                type: "frame",
                setting: {
                    style: {
                        textAlign: "center",
                        padding: 40,
                        backgroundImage: "url('https://placehold.co/1200x400')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "#ffffff",
                    },
                },
                children: [
                    {
                        id: "text-hero-title-010",
                        label: "Hero Title",
                        type: "text",
                        setting: {
                            content: "Welcome to Our Site",
                            style: { fontSize: "2.5rem", fontWeight: 800 },
                        },
                        children: [],
                    },
                    {
                        id: "text-hero-sub-011",
                        label: "Hero Subtitle",
                        type: "text",
                        setting: {
                            content: "We create amazing web experiences.",
                            style: { fontSize: "1.25rem", marginTop: "12px" },
                        },
                        children: [],
                    },
                ],
            },
            // About Section
            {
                id: "frame-about-012",
                label: "About Section",
                type: "frame",
                setting: { style: { padding: 32, backgroundColor: "#ffffff" } },
                children: [
                    {
                        id: "text-about-title-013",
                        label: "About Title",
                        type: "text",
                        setting: {
                            content: "About Us",
                            style: { fontSize: "2rem", fontWeight: 700 },
                        },
                        children: [],
                    },
                    {
                        id: "text-about-text-014",
                        label: "About Text",
                        type: "text",
                        setting: {
                            content:
                                "We are passionate developers building scalable applications.",
                            style: { marginTop: "12px", lineHeight: "1.6" },
                        },
                        children: [],
                    },
                ],
            },
            // Services Grid
            {
                id: "frame-services-015",
                label: "Services Grid",
                type: "frame",
                setting: {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                        padding: 32,
                    },
                },
                children: [
                    {
                        id: "frame-service-016",
                        label: "Service Card 1",
                        type: "frame",
                        setting: {
                            style: {
                                padding: 24,
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                            },
                        },
                        children: [
                            {
                                id: "text-service1-title-017",
                                label: "Service 1 Title",
                                type: "text",
                                setting: {
                                    content: "Design",
                                    style: { fontSize: "1.25rem", fontWeight: 600 },
                                },
                                children: [],
                            },
                            {
                                id: "text-service1-desc-018",
                                label: "Service 1 Desc",
                                type: "text",
                                setting: {
                                    content: "User-centered UI/UX design.",
                                    style: { marginTop: "8px", color: "#6b7280" },
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "frame-service-019",
                        label: "Service Card 2",
                        type: "frame",
                        setting: {
                            style: {
                                padding: 24,
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                            },
                        },
                        children: [
                            {
                                id: "text-service2-title-020",
                                label: "Service 2 Title",
                                type: "text",
                                setting: {
                                    content: "Development",
                                    style: { fontSize: "1.25rem", fontWeight: 600 },
                                },
                                children: [],
                            },
                            {
                                id: "text-service2-desc-021",
                                label: "Service 2 Desc",
                                type: "text",
                                setting: {
                                    content: "Modern web & mobile apps.",
                                    style: { marginTop: "8px", color: "#6b7280" },
                                },
                                children: [],
                            },
                        ],
                    },
                    {
                        id: "frame-service-022",
                        label: "Service Card 3",
                        type: "frame",
                        setting: {
                            style: {
                                padding: 24,
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                            },
                        },
                        children: [
                            {
                                id: "text-service3-title-023",
                                label: "Service 3 Title",
                                type: "text",
                                setting: {
                                    content: "Consulting",
                                    style: { fontSize: "1.25rem", fontWeight: 600 },
                                },
                                children: [],
                            },
                            {
                                id: "text-service3-desc-024",
                                label: "Service 3 Desc",
                                type: "text",
                                setting: {
                                    content: "Technology strategy & planning.",
                                    style: { marginTop: "8px", color: "#6b7280" },
                                },
                                children: [],
                            },
                        ],
                    },
                ],
            },
            // Contact Section
            {
                id: "frame-contact-025",
                label: "Contact Section",
                type: "frame",
                setting: { style: { padding: 32, backgroundColor: "#ffffff" } },
                children: [
                    {
                        id: "text-contact-title-026",
                        label: "Contact Title",
                        type: "text",
                        setting: {
                            content: "Get in Touch",
                            style: { fontSize: "2rem", fontWeight: 700 },
                        },
                        children: [],
                    },
                    {
                        id: "text-contact-info-027",
                        label: "Contact Info",
                        type: "text",
                        setting: {
                            content: "Email: info@example.com",
                            style: { marginTop: "8px" },
                        },
                        children: [],
                    },
                ],
            },
            // Footer
            {
                id: "frame-footer-028",
                label: "Footer",
                type: "frame",
                setting: {
                    style: {
                        padding: 16,
                        backgroundColor: "#111827",
                        color: "#e5e7eb",
                        textAlign: "center",
                    },
                },
                children: [
                    {
                        id: "text-footer-029",
                        label: "Footer Text",
                        type: "text",
                        setting: {
                            content: "© 2025 MyCompany. All rights reserved.",
                            style: { fontSize: "0.875rem" },
                        },
                        children: [],
                    },
                ],
            },
        ],
    } as TreeNode,
};
